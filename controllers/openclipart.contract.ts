import { Method, MethodConfig, Query, Verbs, MethodResult } from '@methodus/server';

@MethodConfig('OpenClipart')
export class OpenClipart {

    @Method(Verbs.Get, '/search/json/')
    public static async search(@Query('query') query: string,
                               @Query('page') page: number = 1,
                               @Query('amount') amount: number = 50,
                               @Query('sort') sort: string = 'date',
    ): Promise<MethodResult<any>> {
        return new MethodResult({});
    }
}
