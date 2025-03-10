import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../../features/authSlice';
import { useParams } from 'react-router-dom';

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserProfile(userId));
    }
  }, [dispatch, userId]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h1 className="text-2xl font-bold text-center mb-4">User Profile</h1>
      {user ? (
        <table className="min-w-full border-collapse border border-gray-300">
          <tbody>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <td className="border border-gray-300 px-4 py-2">{user?.name}</td>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <td className="border border-gray-300 px-4 py-2">{user?.email}</td>
            </tr>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
              <td className="border border-gray-300 px-4 py-2">{user?.role}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="text-center text-red-500">No user data found.</p>
      )}
    </div>
  );
};

export default CustomerProfile;
