import React, { useState, useEffect } from 'react';
import { list_items } from './questions_page'
import { Helmet } from 'react-helmet'
import Posts from './Posts'
import PostsComponent from './PostsComponent';
// import Pagination from 'react-bootstrap-4-pagination'
//import Pagination from './Paginate'
const QandA = () => {
    // DisplayList(list_items, list_element, rows, current_page);
    // SetupPagination(list_items, pagination_element, rows);


    return (
        <div id="flexbox" className="row">
            <Helmet>
                <meta charset="utf-8" />
                <meta name="keywords" content="study guides, quiz, how smart are you, bece past questions" />
                <meta name="description" content="These quizzes are a blend of BECE past questions and everyday Science and Technology applications. The questions broaden your knowledge on life and Science in general. Put yourself to the test by taking the quizzes..." />
                <title>StudyByYourself-Questions and Answers</title>
            </Helmet>
            <div id="det" className="col-sm-3 col-md-3">
                <p>
                    We are a group of people whom based on years of practice and research,
                    have come out with the remedy to the problem of reading or
                    studying from your phone. As well, we delve deeper into
                    solving questions and correcting common misconceptions in
                areas of <em><b>Mathematics</b></em> and <em><b>Science</b></em>.
                We believe that everything under the sun can be solved and as such,
                practice and more practice is required. As a dedicated group to this cause,
                we kindly seek for your contribution of following keenly what you have read or watched.
                Nonetheless, we also welcome questions and contributions you may have as you embark on your journey.
        		</p>
            </div>


            {/* ////////QUESTIONS SECTION /////// */}

            <main className="col-sm-5 col-md-5">
                <div className="list" id="list"></div>
                {/* items will be displayed here. the list you are
		seeing in the browser is an array in the js file(i'll show you)
		  */}
                <div className="pagenumbers" id="pagination"></div>

                {/*      {DisplayList(list_items, list_element, rows, current_page)}
               
                {/* the page buttons are displayed here. */}
                <div>
                    <Freda />


                </div>
            </main>




            {/* ///////END OF QUESTIONS ///// */}
            <div id="det" className="col-sm-4 col-md-4">
                <p>We are a group of people whom based on years of practice and research, have come out with the remedy to the problem of reading or studying from your phone. As well, we delve deeper into solving questions and correcting common misconceptions in areas of <em><b>Mathematics</b></em> and <em><b>Science</b></em>. We believe that everything under the sun can be solved and as such, practice and more practice is required. As a dedicated group to this cause, we kindly seek for your contribution of following keenly what you have read or watched. Nonetheless, we also welcome questions and contributions you may have as you embark on your journey.
        		</p>
            </div>


        </div>
    );
}


const Freda = () => {
    const [posts, setPosts] = useState(list_items);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [button, setButton] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setButton(true);
            const res = list_items;
            setPosts(res);
            setLoading(false);
        }

        fetchPosts();
    });

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => { setCurrentPage(pageNumber) }

    let paginationConfig = {
        totalPages: 10,
        currentPage: currentPage,
        showMax: postsPerPage,
        threeDots: true,
        prevNext: true,
        prevPrev: true,
        onClick: paginate,
    };

    return (
        <div className='container mt-5'>
            <h2 className='text-secondary mb-3' style={{ textAlign: 'center', backgroundColor: 'white' }}>How Smart Are You? Take the challenge</h2>
            {/* 
THIS IS WHERE YOU HAVE TO USE THE map function, THE POST COMPONENT REPRESENT JUST 1 QUESTION.
SO USING THE MAP YOU ARE BASICALLY SAYING FOR EVERY QUESTION IN YOUR ARRAY, RENDER IT IN THE POST COMPONENT.
SO THE ITERATOR PASSES EACH OBJECT REPRESENTING A SINGLE QUESTION TO THE POST COMPONENT TO BE RENDERED SO IT KEEPS
EACH INDEX UNIQUE(SO THAT PROBLEM YOU WERE FACING CANNOT HAPPEN)
*/}
            {list_items.map((question, i) => (
                <PostsComponent key={i} post={question} />
            ))
            }


            {/* <Posts posts={currentPosts} loading={loading} button={button} /> */}


            {/* <Pagination {...paginationConfig} /> */}
        </div>
    )
}


export default QandA;