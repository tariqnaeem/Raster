import React from 'react';

import Icon from '@fortawesome/react-fontawesome';
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle';
import faQuestionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle';
import FusionCharts from 'fusioncharts';
import ReactFC from 'react-fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

const Graph = ({ audits = [] }) => {
    var males  = [];
    var females = [];
    var chartObj = [];
    var labels = [];
    for(var index =0; index < audits.length; index++){
            
            var index1 =0
            for(index1=0;index1<labels.length;index1++){
                if(labels[index1] == audits[index].age5p_age_in_five_year_groups){
                    break;
                }
            }
            if(index1 == labels.length){
                var obj = {};
                labels.push(audits[index].age5p_age_in_five_year_groups);
                obj.label = audits[index].age5p_age_in_five_year_groups;
                var count = 0;
                for(var index2 =0; index2 < audits.length; index2++){
                    if(audits[index2].age5p_age_in_five_year_groups == obj.label){
                        count++;
                    }
                }
                obj.value = count;

                if(audits[index].sexp_sex =='Male'){
                    males.push({label: obj.label, value: obj.value});
                }
                else {
                    females.push({label: obj.label, value: obj.value});
                }

            }
    }
    
    chartObj.push({chart: {
        caption: 'Graph',
        subCaption: 'Stats',
        numberPrefix: '$',
        theme: 'ocean',
        }});
        Charts(FusionCharts);

        const malesDataSource = {
            chartObj,
            data: males
        };

        const femalesDataSource = {
            chartObj,
            data: females
        };

        const chartFemaleConfigs = {
            type: 'column2d',
            width: 600,
            height: 400,
            dataFormat: 'json',
            dataSource: femalesDataSource,
        };

        const chartMaleConfigs = {
            type: 'column2d',
            width: 600,
            height: 400,
            dataFormat: 'json',
            dataSource: malesDataSource,
        };
	return (
		<table>
            <tbody>
                <tr>
                    <td style={{width: '50%'}}> 
                        <div>MALES</div><div><ReactFC {...chartMaleConfigs} /></div>
                    </td>
                    <td style={{width: '50%'}}> 
                        <div>FEMALES</div><div><ReactFC {...chartFemaleConfigs} /></div>
                    </td>
                </tr>
            </tbody>
        </table>
	);
};

export default Graph;
