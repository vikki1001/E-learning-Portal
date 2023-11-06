import React from "react";
import { useFormik } from "formik";
import { Roleschema } from "./roleschema";
import axios from "axios";


const initialValues = {

  rolecode: "",
  rolename: "",
  level: ""
};
export default function Role() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Roleschema,
      onSubmit: (values, action) => {
        console.log(values)

        // const res = await axios.post(url,values)
        // console.log(res.data) 
        action.resetForm();
      },

    });
  console.log(errors);
  return <div>
    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary">
              <div class="card-header">
              </div>
              <form id="quickForm" onSubmit={handleSubmit}>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Role Code</label>
                    <input type="text"
                      name="rolecode"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Role Code here.."
                      value={values.rolecode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.rolecode && touched.rolecode ? (
                      <p className="form-error">{errors.rolecode}</p>
                    ) : null}
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Role Name</label>
                    <input type="text"
                      name="rolename"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={values.rolename}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.rolename && touched.rolename ? (
                      <p className="form-error">{errors.rolename}</p>
                    ) : null}
                  </div>
                  <div class="form-group mb-0 form-group">
                    <label>Level</label>
                    <select
                      className="form-control select2bs4"
                      required
                      name="level"
                      value={values.level}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" defaultValue>
                        Select
                      </option>
                      <option value="Ho">Ho</option>
                      <option value="Ho">Ho</option>
                      <option value="Ho">Ho</option>
                    </select>
                    {errors.level && touched.level ? (
                      <p className="form-error">{errors.level}</p>
                    ) : null}

                  </div>

                </div>

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}