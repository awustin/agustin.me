import { ref, watch, onMounted, onUnmounted } from 'vue';
import { usePages } from './pagesState';

const { getCurrentPage, setCurrentPage } = usePages();

/**
 * Sets the object ref passed as the current page, based on `IntersectionObserver` API. 
 * 
 * @param {ref} elementRef
 */
export const usePageInViewport = elementRef => {
    if(!elementRef) {
        throw `Element ref was expected as an argument but ${elementRef} was passed`;
    }

    const handleIntersect = ([{ isIntersecting, target: element }]) => {
        if(isIntersecting) {
            setCurrentPage(element.id);
        }
    };
    const options = {
        rootMargin: '0px',
        threshold: 0.33
    };
    const observer = new IntersectionObserver(handleIntersect, options);

    onMounted(() => {
        const { value: element } = elementRef;

        observer.observe(element);
    });

    onUnmounted(() => {
        const { value: element } = elementRef;

        observer.unobserve(element);
    });
};

/**
 * Executes the first callback when the element passed is the current page.
 * Executes the second callback if not.
 * 
 * @param {String|Number} pageId
 * @param {function} callbackIn 
 * @param {function} callbackOut 
 */
export const useWatchPage = (pageId = null, callbackIn = null, callbackOut = null) => {
    if(!pageId) {
        throw `Page id was expected as an argument but null was passed`;
    }

    watch(getCurrentPage, currentPage => {
        if(currentPage === pageId) {
            if(typeof callbackIn == 'function') {
                callbackIn();
            }
        } else if(typeof callbackOut == 'function') {
            callbackOut();
        }
    });
};
