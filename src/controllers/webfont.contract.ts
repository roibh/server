import { Method, MethodConfig, Query, Verbs, MethodResult } from '@methodus/server';

@MethodConfig('WebFont')
export class WebFont {
    @Method(Verbs.Get, '/css')
    public async fonts(@Query('family') families: string): Promise<MethodResult<any>> {
        return new MethodResult({});
    }
}
