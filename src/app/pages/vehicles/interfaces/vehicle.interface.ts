import VehicleResponse from './../../../repositories/vehicles/interfaces/vehicles-response.interface';

export default interface Vehicle extends VehicleResponse {
    showDetails: undefined | boolean;
}
