// adicionar variável à array
function useApp(apps, app) {
    apps.push(app);
    return apps;
};

console.log(useApp(["Clock", "Twitter"], "Firefox"));
console.log(useApp([], "Safari"));