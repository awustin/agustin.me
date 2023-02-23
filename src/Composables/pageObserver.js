import { onMounted, onUnmounted } from 'vue';

/*
State of the app for the animations:
- What page I am in
- Am I entering/leaving a page
*/

export const usePageObserver = elementRef => {
    if(!elementRef) {
        throw `Element ref was expected as an argument but ${elementRef} was passed`;
    }

    const observer = new IntersectionObserver(() => console.log(scrollStore.baz),
        {
            rootMargin: '0px',
            threshold: 0.1
        }
    );

    onMounted(() => {
        const { value: element } = elementRef;

        observer.observe(element);
    });

    onUnmounted(() => {
        const { value: element } = elementRef;

        observer.unobserve(element);
    });
}