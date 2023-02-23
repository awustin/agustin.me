import { ref, watch, onMounted, onUnmounted } from 'vue';
import { usePages } from './pagesState';

const { getCurrentPage, setCurrentPage } = usePages();

/**
 * Accepts the reference of the element to observe as the first parameter, 
 * and a callback that will execute when intersection is detected. A fallback
 * function can be provided as a third parameter to execute when there's no
 * intersection detected.
 * 
 * @param {ref} elementRef
 * @param {Function} callbackIn
 * @param {Function} callbackOut
 */
export const usePageObserver = (elementRef, callbackIn = null, callbackOut = null) => {
    if(!elementRef) {
        throw `Element ref was expected as an argument but ${elementRef} was passed`;
    }

    const handleIntersect = ([{ isIntersecting, target: element }]) => {
        if(isIntersecting) {
            setCurrentPage(element.id);
        }
    };

    const observer = new IntersectionObserver(
        handleIntersect,
        {
            rootMargin: '0px',
            threshold: 0.4
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

    watch(getCurrentPage, currentPage => {
        if(currentPage === elementRef.value.id) {
            if(typeof callbackIn == 'function') {
                callbackIn();
            }
        } else if(typeof callbackOut == 'function') {
            callbackOut();
        }
    });

};
