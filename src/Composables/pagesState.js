import { ref, computed } from 'vue';

/*
State of the app for the animations:
- What page I am in
- Am I entering/leaving a page
*/

const state = ref({
    current: null
});

export const usePages = () => {
    const getCurrentPage = computed(() => state.value.current);

    const setCurrentPage = key => {
        state.value.current = key;
    }

    return {
        getCurrentPage,
        setCurrentPage,
    };
};
