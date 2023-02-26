import sanityClient  from "@sanity/client";

export const client = sanityClient ({
    projectId: 'fldgb6y3',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:'skNCYUmSnUxCNfNDu1LA8CZm6OVnHofcaDiKsJteFOx4NB3JaQMJMEDb6ryaycNpes5SwZ9v3dv9EDmi8USC63lWWXYM8bLy31jw2nMsYYvwl7gscRDRnBta4scVAH6JdvFfrfszbiOEoFrb8gP3yoWXA1znVR3IBqqlaaNuAPhfsdawDYE2',
    useCdn: false,
})