import { Context } from 'koa'

export const respond200 = (ctx: Context) => {
  ctx.status = 200
  ctx.body = ''
}

export const respond204 = (ctx: Context, body?: object) => {
  ctx.status = 204
  ctx.body = body || ''
}

export const respond200json = (ctx: Context, body?: object) => {

  ctx.type = 'json'
  ctx.body = body
}

export const respond200plain = (ctx: Context, body: string) => {
  ctx.type = 'text/plain'
  ctx.body = body
}

export const respond403 = (ctx: Context, body?: object | string) => {
  ctx.status = 403
  ctx.body = body || ''
}

export const respond400 = (ctx: Context, body?: object | string) => {
  ctx.status = 400
  ctx.body = body || ''
}

export const respond409 = (ctx: Context, body?: object | string) => {
  ctx.status = 409
  ctx.body = body || ''
}

export const respond401 = (ctx: Context) => {
  ctx.status = 401
  ctx.body = ''
}

export const respond404 = (ctx: Context, body?: string) => {
  ctx.status = 404
  ctx.body = body || ''
}

export const respond500 = (ctx: Context) => {
  ctx.status = 500
  ctx.body = ''
}
