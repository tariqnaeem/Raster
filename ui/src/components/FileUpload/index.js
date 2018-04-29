import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import './style.css';

const FileUpload = ({getDiscrepancies}, {showAlert}) =>
{
	const uploadFile = (event) => {
		const file = event.target.files[0];
		var invalidAVC = '';
		var message = '';
		if (file.name.indexOf('.csv') < 0) {
			//alert
			alert('file type should be CSV only');
		} else {
			let fr = new FileReader();
			fr.onload = function (e) {

				var arrAVCs = e.target.result.split('\n');

				for (var index = 0; index < arrAVCs.length; index++) {
					var avc = arrAVCs[index].trim();
					if (avc != '') {
						var searchIndex = avc.match(/AVC[0-9]{12}$/); //RE for AVC format

						if (searchIndex === null) { //AVC-12 numeric digits

							invalidAVC = avc;
							message += 'Invalid '+avc+ ' provided\n';

						}
					}
				}
				document.getElementById('AVCFile').value = '';

				if (invalidAVC == '') { //NO AVC error
					getDiscrepancies({'avcs' : arrAVCs, 'fileName': file.name, localGuid: uuidv4()});

				} else {
					alert('Below provided are invalid AVC\'s:\n' + message);
				}
			};
			fr.readAsText(file);
		}
	};

	return (
		<div className='fileUpload'>
			<button
				className='btn btn-primary'
				onClick={() => this.fileInput.click()}
			>+ Upload AVC Mig. File (csv) for auditing</button>

			<input
				ref={fileInput => this.fileInput = fileInput}
				type="file"
				className='upload'
				name="AVCFile" id="AVCFile"
				onChange={uploadFile}
			/>
		</div>
	);
};

FileUpload.propTypes = {
	getDiscrepancies: PropTypes.func.isRequired,
};

export default FileUpload;
