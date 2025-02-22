/* Created by staff of the U.S. Securities and Exchange Commission.
 * Data and content created by government employees within the scope of their employment 
 * are not subject to domestic copyright protection. 17 U.S.C. 105.
 */

export const cleanSubstring = (orig: string, from: string, to: string) => {
    return orig.substring(orig.search(from), orig.search(to) + to.length);
}