

import { useQuery, useMutation } from '@apollo/client';

import { 
    GET_USER,
    GET_SELF
} from './queries';

import { 
    LOGIN_USER 
} from './mutations';


const Requester = async () => {

    console.log('----------------------- REQUESTER -----------------------');
    const { loading, error, data } = await useQuery(GET_SELF, {variables: { username: 'james' }});
    console.log('RESULT: ', data);
    console.log('---------------------------------------------------------');
}


export default Requester;
