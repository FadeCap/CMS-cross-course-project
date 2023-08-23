const apiConsumerKey = "ck_71e106b3a914014dd1ffc0dcba38278d31a934ac";
const apiConsumerSecret = "cs_7b7dae334bab46c99e0bd76f5bb5cd7c558107ab";
const apiUrl = "https://www.fade.today/wp-json/wc/v1/products/";

const getProducts = async () => {
  try {
    const response = await fetch(apiUrl, {
      method:"GET",
      headers:{
        "Authorization": "Basic " + btoa(apiConsumerKey + ":" + apiConsumerSecret)
      }
    });

    if (!response.ok) {
      const {status, statusText, url} = response
      throw new Error(JSON.stringify({status, statusText, url}));
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error occurred while trying to get products.\n", error);
  }
}; 

export default getProducts;
