import { Method, MethodConfig, Query, Verbs, MethodResult } from '@methodus/server';

@MethodConfig('PixaBay')
export class PixaBay {
    // "all", "photo", "illustration", "vector"
    // 'all', 'horizontal', 'vertical';

    @Method(Verbs.Get, '/')
    public static async search(@Query('key') key: string, @Query('q') q: string,
                               @Query('page') page?: string,
                               @Query('per_page') per_page?: string,
                               @Query('order') order?: string,
                               @Query('image_type') image_type?: string,
                               @Query('orientation') orientation?: string,
                               @Query('category') category?: string): Promise<MethodResult<any>> {
        return new MethodResult({});
    }
}
