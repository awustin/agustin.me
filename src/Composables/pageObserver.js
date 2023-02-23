import { onMounted, onUnmounted } from 'vue';
import { usePages } from './pages';

const { getPage, setCurrentPage } = usePages();

/*
State of the app for the animations:
- What page I am in
- Am I entering/leaving a page
*/

export const usePageObserver = elementRef => {
    if(!elementRef) {
        throw `Element ref was expected as an argument but ${elementRef} was passed`;
    }

    const handleIntersect = ([{ target: element }]) => {
        setCurrentPage(element.id);
        console.log(getPage.value);
    };

    const observer = new IntersectionObserver(
        handleIntersect,
        {
            rootMargin: '0px',
            threshold: 0.9
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