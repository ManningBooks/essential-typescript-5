const timings = new Map();
export function writeTimes() {
    [...timings.entries()].forEach(t => {
        const average = (t[1].elapsed / t[1].count).toFixed(2);
        console.log(`${t[0]}, count: ${t[1].count}, time: ${average}ms`);
    });
}
export function time(config) {
    return function (method, ctx) {
        let start;
        ctx.addInitializer(() => start = performance.now());
        const methodName = config?.label ?? String(ctx.name);
        return function (...args) {
            start = performance.now();
            // if (config?.time) {
            //     console.log(`${methodName} started`);
            // }
            let result;
            if (config?.replacement) {
                result = config.replacement.call(this, args);
            }
            else {
                result = method.call(this, args);
            }
            if (config?.time) {
                //const duration = (performance.now() - start).toFixed(2);
                const duration = (performance.now() - start);
                //console.log(`${methodName} ended ${duration} ms`);
                if (timings.has(methodName)) {
                    const data = timings.get(methodName);
                    data.count++;
                    data.elapsed += duration;
                }
                else {
                    timings.set(methodName, { count: 1, elapsed: duration });
                }
            }
            return result;
        };
    };
}
