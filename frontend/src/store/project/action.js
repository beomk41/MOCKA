export const projectActions = {
  setProjectList: (set, projectList) => {
    set((state) => {
      return {
        ...state,
        projectList,
      };
    });
  },
  setRecentProjectList: (set, recentProjectList) => {
    set((state) => {
      return {
        ...state,
        recentProjectList,
      };
    });
  },
  setProject: (set, project) => {
    set((state) => {
      return {
        ...state,
        project,
      };
    });
  },
};
