import React from "react";
import { useState, useEffect } from "react";
import NewsItems from "./NewsItems";

function News() {

  const [articles, setarticles] = useState([]);
  const [pageNum, setpageNum] = useState(1)
  let totalPages = 0;
  

  const getdata = async (pageNum) => {
    let apikey =
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=41b21c29b4e24dc48e597aab802a8e7e&category=health&pageSize=9&page=${pageNum}`;
    // seturl(apikey);
    let data = await fetch(apikey);
    let parsed_data = await data.json();
    setarticles(parsed_data.articles);
    let totalResults = parsed_data.totalResults;
    totalPages = Math.ceil(totalResults/9);
    console.log(totalPages)
  };

  useEffect(() => {
    getdata(pageNum);
  }, []);

  const handlePrev = async ()=>{

    let temp = pageNum-1;
    console.log(temp);
    setpageNum(temp);
    // console.log(pageNum)
    getdata(temp);
  }

  const handleNext = async ()=>{

    let temp = pageNum+1;
    console.log(temp);

    setpageNum(temp);
    // console.log(pageNum)
    getdata(temp);
  }
  return (
    <>
      <div className="container">
        <h2 className="text-center text-white">
          Top headlines in healthcare sector
        </h2>

        <div className="row">
          {articles &&  articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  apikey={element.url}
                  title={element.title?element.title.slice(0,40):""}
                  description={element.description?element.description.slice(0,70):""}
                  urlToImage = {element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/b/good-health-word-cloud-hand-marker-concept-white-background-184068166.jpg"}
                />
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-between my-4">
            <button type="button" className="btn btn-dark" onClick={handlePrev} disabled={pageNum<=1}>&#8592; Prev</button>
            <button type="button" className="btn btn-dark" onClick={handleNext} disabled={pageNum===3} >Next &#8594;</button>
        </div>
      </div>
    </>
  );
}

export default News;
