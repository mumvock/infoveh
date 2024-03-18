export default interface VehicleResponse {
    id: number,
    adm: {
        plate: string,
        chassi: string,
        renavam: string,
    },
    brand: string,
    model: string,
    specs: {
        engine: string,
    },
    factoryYear: number,
    modelYear:  number,
}
