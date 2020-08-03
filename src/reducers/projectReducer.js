const initState={
    posts:[{
        id:'001',titulo:'post numero 1',contenido:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, error ratione eius blanditiis officiis quam tempore voluptate nulla asperiores. Adipisci eos beatae est placeat deleniti nemo reprehenderit vitae sequi veniam.'
    }]
}


const projectReducer = (state=initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log('creando projecto', action.project)
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log('creando projecto error', action.error)
            return state;
        case "AUTHERROR":
            return {
                ...state,
                loading:false,
                authError: action.payload
            }
        default:
           return state;
    }
}

export default projectReducer;
