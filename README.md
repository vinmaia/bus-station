# bus-station

enterprise: {
name: String,
cnpj: String,
}

trip: {
vehicle: Ref,
route: String,
date: Date,
}

vehicle: {
enterprise: Ref,
capacity: Number,
plate: String,
}
