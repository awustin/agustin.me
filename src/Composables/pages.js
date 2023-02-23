import { ref, computed } from 'vue';

const state = ref({
    current: null
});

export const usePages = () => {
    const getPage = computed(() => state.value.current);

    const setCurrentPage = key => {
        state.value.current = key;
    }

    return {
        getPage,
        setCurrentPage,
    };
};
