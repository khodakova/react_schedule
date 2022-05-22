/**
 * регулярка для нахождения подстроки в строке
 * @param value
 */
export function escapeRegExp(value: string): string {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
