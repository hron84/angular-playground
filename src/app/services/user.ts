interface GeoPos {
    lat: number;
    lng: number;
}

interface Address {
    city: string;
    geo: GeoPos;
    street: string;
    suite?: string;
    zipcode: string;
}


export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address?: Address;
    company?: any;
    phone?: string;
    website?: string;
}
