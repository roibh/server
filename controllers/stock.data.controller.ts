import { MethodConfig, Verbs, Method, MethodResult, Query } from '@methodus/server';
import { AuthMiddleware } from './auth.middleware';
import { PixaBay } from './pixabay.contract';

@MethodConfig('StockDataController') // , [AuthMiddleware]
export class StockDataController {
    @Method(Verbs.Get, '/stock/')
    public static async search(@Query('q') q: string,
                               @Query('page') page: number = 1,
                               @Query('per_page') per_page: number = 20,
                               @Query('order') order?: string,
                               @Query('image_type') image_type?: string,
                               @Query('orientation') orientation?: string,
                               @Query('category') category?: string): Promise<MethodResult<any>> {
        const result = await PixaBay.search(process.env.PIXABAY, q);
        return new MethodResult(result);
    }

    @Method(Verbs.Get, '/stock/categories')
    public static async categories(): Promise<MethodResult<any>> {
        const result = [
            'fashion', 'nature', 'backgrounds', 'science', 'education',
            'people', 'feelings', 'religion', 'health', 'places', 'animals',
            'industry', 'food', 'computer', 'sports', 'transportation', 'travel',
            'buildings', 'business', 'music',
        ];

        return new MethodResult(result);
    }

}
