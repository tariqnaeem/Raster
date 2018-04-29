import React from 'react';

import Icon from '@fortawesome/react-fontawesome';
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle';
import faQuestionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle';

import BarChart from 'react-bar-chart';

const Graph = ({ audits = [] }) => {
    var males  = [];
    var females = [];
    for(var index =0; index < audits.length; index++){
            var obj ={};
            obj.gender = audits[index].sexp_sex;
            //"0-4 years"
            var range = audits[index].age5p_age_in_five_year_groups.split('-');
            if(range.length > 1){
            var val  = range[1].replace( /^\D+/g, '');
            var median = parseInt(range[0]) + parseInt(val) / 2;
                obj.value = median;
            }
            else {
                obj.value = audits[index].age5p_age_in_five_year_groups.replace( /^\D+/g, '');
            }
            if(audits[index].sexp_sex =='Male'){
                males.push(obj);
            }
            else {
                females.push(obj);
            }
    }
	return (
		<div>
            <div style={{width: '50%'}}> 
                <BarChart 
                    ylabel={'Ranges'}
                    xlabel ={'Males'}
                    width={500}
                    height={500}
                    data={males}
                  />
            </div>
            <div style={{width: '50%'}}> 
                <BarChart 
                    ylabel={'Ranges'}
                    xlabel ={'Females'}
                    width={500}
                    height={500}
                    data={females}
                  />
            </div>
        </div>
	);
};

export default Graph;
