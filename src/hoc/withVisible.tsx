import React from 'react';

interface withVisibleProps {
    visible: any,
    otherProps?: any
}

// function withVisible2(wrappedComponent: withVisibleProps) {
//     function Visible({ visible, ...otherProps }) {
//         if (!visible) return null;
//         const WrappedComponent = wrappedComponent;
//         return <WrappedComponent { ...otherProps } />;
//     }
//
//     return Visible;
// }

function withVisible<T extends withVisibleProps>(wrappedComponent: React.ComponentType<T>) {
    function Visible({ visible, ...otherProps }: withVisibleProps) {
        if (!visible) return null;
        const WrappedComponent = wrappedComponent;
        return <WrappedComponent { ...otherProps as T } />;
    }

    return Visible;
}

export default withVisible;

// interface WithVisibleProps {
//     visible: boolean;
// }
//
// export function withVisible<T extends WithVisibleProps = WithVisibleProps>(
//     WrappedComponent: React.ComponentType<T>,
// ) {
//     const displayName =
//         WrappedComponent.displayName || WrappedComponent.name || 'Component';
//
//     // Creating the inner component. The calculated Props type here is the where the magic happens.
//     const ComponentWithTheme = (props: Omit<T, keyof WithVisibleProps>) => {
//
//
//         return <WrappedComponent { ...(props as T) } />;
//     };
//
//     ComponentWithTheme.displayName = `withTheme(${ displayName })`;
//
//     return ComponentWithTheme;
// }
