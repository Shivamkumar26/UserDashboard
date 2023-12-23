import axios from 'axios';

export const fetchAllData = () => async (dispatch) =>{
    try {
        dispatch({type : 'DATA_REQUEST'})
        const {data} = await axios.get("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers");
        dispatch({type : 'DATA_SUCCESS', payload : data});
    } catch (error) {
        dispatch({type : 'DATA_FAILURE'})
    }
}

export const selectData = (group, allTickets, orderValue) => async (dispatch) =>{
    try {
        dispatch({type : 'SELECT_DATA_REQUEST'})

        let user = false;
        let mySet = new Set();
        let arr = [], selectedData = [];

        if(group === 'status'){
            allTickets.forEach((e) => {
                mySet.add(e.status);
            })
    
            arr = [...mySet];
            arr.forEach((e, index) => {
                let arr = allTickets.filter((fe) => {
                    return e === fe.status;
                })
                selectedData.push({
                    [index] : {
                        title : e,
                        value : arr
                    }
                })
            })
        } else if(group === 'user') {
            user = true;
            allTickets?.allUser?.forEach((e, index) => {
                arr = allTickets?.allTickets?.filter((fe) => {
                    return e.id === fe.userId;
                })

                selectedData.push({
                    [index] : {
                        title : e.name,
                        value : arr
                    }
                })
            })
        } else {
            let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

            prior_list.forEach((e, index) => {
                arr = allTickets.filter((fe) => {
                    return index === fe.priority;
                })

                selectedData.push({
                    [index] : {
                        title : e,
                        value : arr
                    }
                })
            })
        }

        if(orderValue === "title"){
            selectedData.forEach((e, index) => {
                e[index]?.value?.sort((a, b) => a.title.localeCompare(b.title))
            })
        }

        if(orderValue === "priority"){
            selectedData.forEach((e, index) => {
                e[index]?.value?.sort((a, b) => b.priority - a.priority)
            })
        }
        
        dispatch({type : 'SELECT_DATA_SUCCESS', payload : {selectedData, user}});

    } catch (err) {
        dispatch({type : 'SELECT_DATA_FAILURE', payload : err.message})
    }
}
