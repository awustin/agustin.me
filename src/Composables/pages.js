import { ref, computed } from 'vue';

const state = ref({
    page: 1,
    last: 5,
});

export const usePages = () => {
    const getPage = computed(() => state.value.page);
    const next = () => {
        state.value.page++;
    };
    const previous = () => {
        state.value.page--;
    };

    return {
        getPage,
        next,
        previous,
    };
};
