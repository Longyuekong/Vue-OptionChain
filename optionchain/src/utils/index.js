export default function useOptionChain(target) {

    return new Proxy(target, {
        get:  (target, propKey)=> {
            const proKeyArr = propKey.split('?.')
            console.log('prok',proKeyArr);
            return  proKeyArr.reduce((a,b)=>a?.[b],target)
        }
    })
}