import { Method, MethodConfig, Query, Verbs, MethodResult } from '@methodus/server';

@MethodConfig('PixaBay')
export class PixaBay {
    // "all", "photo", "illustration", "vector"
    // 'all', 'horizontal', 'vertical';

    @Method(Verbs.Get, '/')
    public static async searchImage(@Query('key') key: string, @Query('q') q: string,
                                    @Query('page') page?: number,
                                    @Query('per_page') per_page?: number,
                                    @Query('order') order?: string,
                                    @Query('image_type') image_type?: string,
                                    @Query('orientation') orientation?: string,
                                    @Query('category') category?: string): Promise<MethodResult<any>> {
        return new MethodResult({});
    }

    @Method(Verbs.Get, '/videos')
    public static async searchVideo(@Query('key') key: string, @Query('q') q: string,
                                    @Query('page') page?: number,
                                    @Query('per_page') per_page?: number,
                                    @Query('order') order?: string,
                                    @Query('video_type') image_type?: string,
                                    @Query('category') category?: string): Promise<MethodResult<any>> {
        return new MethodResult({});
    }

}
