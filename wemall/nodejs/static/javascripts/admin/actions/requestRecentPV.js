import {
	REQUEST_RECENT_PV
} from '../constants/actionTypes';

function receiveRecentPV(data) {
    return {
        type: REQUEST_RECENT_PV,
        recentPV: data.list
    };
}

export default function() {
    return dispatch => {
        var url = pageConfig.apiPath + '/admin/visit/pv/latest/30';
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveRecentPV(json.data)))
    };
}