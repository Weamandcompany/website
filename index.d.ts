// types/react-responsive-masonry.d.ts (or index.d.ts)
declare module 'react-responsive-masonry' {
    import { ReactNode } from 'react';

    export interface ResponsiveMasonryProps {
        columnsCountBreakPoints: { [key: number]: number };
        children: ReactNode;
    }

    // Force the default export as 'any' and export it normally
    const ResponsiveMasonry: any;
    export { ResponsiveMasonry }; // Named export to support your style
    export default ResponsiveMasonry;
}
