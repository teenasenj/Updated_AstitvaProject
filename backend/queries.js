const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'loginconnection',
  password: 'avantnet',
  port: 5433,
});





// fetch all records for login

// const getLoginUsers = (request, response) => {
//   pool.query('SELECT * FROM users_master ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

const getLoginUsers = (request, response) => {
  const { email, password } = request.body;
  pool.query(`SELECT * FROM users_master where email='${email}' and password='${password}'`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};



//Login api
// const getLoginUsers = (request, response) => {
//   pool.query(
//     //`SELECT * FROM users_master where email = ${request.body.email} and  password=${request.body.password_login}`,
//     `SELECT * FROM users_master where email =$1 and  password=$2`,[request.body.email,request.body.password_login],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       if (results.rows.length > 0) {
//         return response.status(200).json({ userDetails: results.rows[0] });
      
//       } else {
//         return response
//           .status(400)
//           .send({ message: "Username or password does not match" });
//       }
//       // response.status(200).json(results.rows);
//     }
//   );
// };







//fetch data using id in signup
const getUsersChemist_id = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM signup WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};




//fetch all data in signup
const getUsersChemist = (request, response) => {
  pool.query('SELECT * FROM signup ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


// fetch records by id for login_id
const getLoginUsers_id = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM users_master WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};






//chemist signup post data
const createchemist_signup = (request, response) => {
  const { shopname,firstname, lastname, dob, licenceno, qualification, email, phoneno, drivinglicenceno, address, state, country, chemistlicence, drivinglicence, chemistphoto} = request.body;
  pool.query(
    'INSERT INTO signup ( shopname, firstname, lastname, dob, licenceno, qualification, email, phoneno, drivinglicenceno, address, state, country, chemistlicence, drivinglicence, chemistphoto) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING * ',
    [shopname, firstname, lastname, dob, licenceno, qualification, email, phoneno, drivinglicenceno, address, state, country, chemistlicence, drivinglicence, chemistphoto],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
}


//opertor post data
const createadding_operator = (request, response) => {
  const { name, dob,  qualification, email, phoneno,  address,  password, usertype} = request.body;
  pool.query(
    'INSERT INTO adding_operator (  name, dob, qualification, email, phoneno,  address,  password, usertype) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [ name, dob, qualification, email, phoneno,  address,  password, usertype],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
}


// operator fetch by id 

const getoperator_id = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM adding_operator WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


//fetch all data in operator
const getoperator = (request, response) => {
  pool.query('SELECT * FROM adding_operator ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


// Admin screen login 
const createlogin = (request, response) => {
  const { email, password,  usertype, name} = request.body;
  pool.query('INSERT INTO users_master (email, userspassword,  usertype, name) VALUES ($1, $2, $3, $4) RETURNING *',
    [ email, password,  usertype, name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
}



const ProductInquiry = (request, response) => {
  const { productname, quantity,  dosagestrip,  productphoto} = request.body;
  pool.query('INSERT INTO product_master(productname, quantity,  dosagestrip, productphoto) VALUES ($1, $2, $3, $4) RETURNING *',
    [ productname,  quantity,  dosagestrip, productphoto],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
}





const updateChemist = (request, response) => {

  const id = parseInt(request.params.id);
    const { status, usertype, password } = request.body;
    
  pool.query(
    'UPDATE signup SET status= $1 ,usertype = $2, userspassword =$3, email=$4 where  id=$5 ', 
        
        [status,  usertype, password,email, id],
    (error, results) => { 
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
      console.log(status)
    }
  );
};









module.exports = {
  createlogin,
  getLoginUsers,
  getLoginUsers_id,

  updateChemist,


  createchemist_signup,
  getUsersChemist,
  getUsersChemist_id,
  
  createadding_operator,
  getoperator_id,
  getoperator,

  ProductInquiry,
};







