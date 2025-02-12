enum ServiceStatus {
    ACTIVE = 'ACTIVE',
    MAINTENANCE = 'MAINTENANCE'
}

export interface ServiceStateResponse {
    status: ServiceStatus;
}