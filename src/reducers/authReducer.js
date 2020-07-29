const initState={
    posts:[{
        id:'001',titulo:'post numero 1',contenido:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, error ratione eius blanditiis officiis quam tempore voluptate nulla asperiores. Adipisci eos beatae est placeat deleniti nemo reprehenderit vitae sequi veniam.'
    }]
}

const authReducer=(state=initState,action)=>{
    return state;
}

export default authReducer;