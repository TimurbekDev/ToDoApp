import {
    BadRequestException,
    CanActivate,
    ExecutionContext,
    Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { JwtCustomService, TokenType } from '@modules';
import { Protected } from '@decorators';

export declare interface RequestInterface extends Request {
    userId: string | undefined;
    email: string | undefined
}

@Injectable()
export class CheckAuthGuard implements CanActivate {
    constructor(private reflector: Reflector, private jwtService: JwtCustomService) { }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<RequestInterface>();

        const isProtected = this.reflector.get<boolean>(
            Protected,
            context.getHandler(),
        );

        if (!isProtected) {
            return true;
        }

        const bearerToken = request.headers['authorization'];

        if (
            !(
                bearerToken &&
                bearerToken.startsWith('Bearer') &&
                bearerToken.split('Bearer ')[1]?.length
            )
        ) {
            throw new BadRequestException('Please provide valid bearer token');
        }

        const token = bearerToken.split('Bearer ')[1];

        const payload = await this.jwtService.verifyToken(token, TokenType.Access)

        request.userId = payload.id
        request.email = payload.role

        return true;
    }
}