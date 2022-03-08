import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';

const PortfolioForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [noEndDate, setNoEndDate] = useState(false);

  useEffect(() => {
    register('startDate');
    register('endDate');
  }, []);

  const handleDateChange = (dateType, setDate) => (date) => {
    setValue(dateType, endDate ? date : date.toISOString());
    setDate(date);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label htmlFor="title">Title</label>
        <input
          {...register('title', { required: true })}
          name="title"
          type="text"
          className="form-control"
          id="title"
        />
        {errors.title && (
          <span
            style={{ color: 'red', marginTop: '30px', fontWeight: 'bolder' }}
          >
            This field is required
          </span>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="company">Company</label>
        <input
          {...register('company', { required: true })}
          name="company"
          type="text"
          className="form-control"
          id="company"
        />
        {errors.company && (
          <span
            style={{ color: 'red', marginTop: '30px', fontWeight: 'bolder' }}
          >
            This field is required
          </span>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="companyWebsite">Company Website</label>
        <input
          {...register('companyWebsite', { required: true })}
          name="companyWebsite"
          type="text"
          className="form-control"
          id="companyWebsite"
        />
        {errors.companyWebsite && (
          <span
            style={{ color: 'red', marginTop: '30px', fontWeight: 'bolder' }}
          >
            This field is required
          </span>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="location">Location</label>
        <input
          {...register('location', { required: true })}
          name="location"
          type="text"
          className="form-control"
          id="location"
        />
        {errors.location && (
          <span
            style={{ color: 'red', marginTop: '30px', fontWeight: 'bolder' }}
          >
            This field is required
          </span>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="jobTitle">Job Title</label>
        <input
          {...register('jobTitle', { required: true })}
          name="jobTitle"
          type="text"
          className="form-control"
          id="jobTitle"
        />
        {errors.jobTitle && (
          <span
            style={{ color: 'red', marginTop: '30px', fontWeight: 'bolder' }}
          >
            This field is required
          </span>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="description">Description</label>
        <textarea
          {...register('description', { required: true })}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description"
        ></textarea>
        {errors.description && (
          <span
            style={{ color: 'red', marginTop: '30px', fontWeight: 'bolder' }}
          >
            This field is required
          </span>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="startDate">Start Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleDateChange('startDate', setStartDate)}
          />
        </div>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="endDate">End Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={endDate}
            onChange={handleDateChange('endDate', setEndDate)}
            disabled={noEndDate ? true : false}
          />
        </div>
      </div>
      <div className="form-group">
        {endDate ? (
          <button
            type="button"
            className="btn btn-danger mb-4"
            onClick={() => handleDateChange('endDate', setEndDate)(null)}
          >
            No End Date
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success mb-4"
            onClick={() =>
              handleDateChange(
                'endDate',
                setEndDate
              )(new Date(new Date().setHours(0, 0, 0, 0)))
            }
          >
            Set End Date
          </button>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default PortfolioForm;
