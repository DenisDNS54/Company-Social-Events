import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//To change the start point of the app to Log In, change line 5 to: import App from './App';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt+QHJqVk1mQ1NFaV1CX2BZeVl2RWlcek4BCV5EYF5SRHNdQF1kSX5WcUJmWXg=;Mgo+DSMBPh8sVXJ1S0R+X1pCaV1DQmFJfFBmQmlZf1R1cUU3HVdTRHRcQlhhS35UdkVmXnhWeHI=;ORg4AjUWIQA/Gnt2VFhiQlJPcEBAXHxLflF1VWRTf156cVBWESFaRnZdQV1mS3xTcUVjXHhWcHBS;MjE0MTY4M0AzMjMxMmUzMjJlMzNXdEtrVjdKbDdXQTBrVERmRENGSHBCejVFNk5QQlBEbGt0QzRyK3RpSklZPQ==;MjE0MTY4NEAzMjMxMmUzMjJlMzNCM3hBbWludjVaNUNJcWhlT3hydWZyejJmYjF2TlZRcWF5U1dteFdzdklFPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldX2JWfFN0RnNedV5wflBDcC0sT3RfQF5jTHxRdkJjWXpWcHNcRQ==;MjE0MTY4NkAzMjMxMmUzMjJlMzNOdkZSbmdmOWhQR21uWFZNQmJBay9JQ1FiQ1NrU1JVLzFQZHVsTnk3OExNPQ==;MjE0MTY4N0AzMjMxMmUzMjJlMzNHV0N6NjFiYmkvbHlzekpreXFXcnd0WGhHOXVMOCt2V2QwNGRqNzZManhZPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcEBAXHxLflF1VWRTf156cVBWESFaRnZdQV1mS3xTcUVjXHdddXFW;MjE0MTY4OUAzMjMxMmUzMjJlMzNFejlsSVpIbXQwL2YxTjBuSkJIMVBJRTNQb0dWc1B4RFZ2d29TOC8rMXlVPQ==;MjE0MTY5MEAzMjMxMmUzMjJlMzNZZ1hTMkx5Mmc5TjNKZGVscDNDOFNlcVNPckNKTDd2T2x2Z0pidnEzdHNnPQ==;MjE0MTY5MUAzMjMxMmUzMjJlMzNOdkZSbmdmOWhQR21uWFZNQmJBay9JQ1FiQ1NrU1JVLzFQZHVsTnk3OExNPQ==');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

