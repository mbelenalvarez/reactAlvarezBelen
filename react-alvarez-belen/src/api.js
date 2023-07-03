export const listApi = (search) => {
        return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
    }

