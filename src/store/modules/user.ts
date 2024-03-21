export const useUserStore = defineStore('user', {
    state: () => ({
        logged: false,
    })
});

export type UserStore = ReturnType<typeof useUserStore>
