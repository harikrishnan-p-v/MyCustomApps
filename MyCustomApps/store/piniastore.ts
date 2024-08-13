export const userStore = defineStore("user", () => {
  const userName = ref("");
  function updateUsername(newUserName: string) {
    userName.value = newUserName;
  }
  return { userName, updateUsername };
});
