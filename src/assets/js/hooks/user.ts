import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { queryClient } from '../components/Providers';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // baseURL: 'http://localhost:8080',
});

const queryKey = 'users';

interface Error {
  message: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface CreateUserResponse {
  id: number;
}

async function createUser(data: any): Promise<CreateUserResponse> {
  const response = await instance.post<CreateUserResponse>('/users', data);

  return response.data;
}

function useCreateUser() {
  return useMutation({
    mutationFn: (data: any) => createUser(data),
  });
}

type DeleteUserResponse = {};

async function deleteUserById(id: number): Promise<DeleteUserResponse> {
  const response = await instance.delete<DeleteUserResponse>(`/users/${id}`);

  return response.data;
}

function useDeleteUser() {
  return useMutation({
    mutationFn: (id: number) => deleteUserById(id),
  });
}

type GetUsersResponse = User[];

async function getUsers(): Promise<GetUsersResponse> {
  const response = await instance.get<GetUsersResponse>('/users');

  return response.data;
}

function useUsers(): UseQueryResult<GetUsersResponse, Error> {
  return useQuery<GetUsersResponse, Error>({
    queryKey: [queryKey],
    queryFn: getUsers,
  });
}

type GetUserResponse = User;

async function getUserById(id: number): Promise<GetUserResponse> {
  const response = await instance.get<GetUserResponse>(`/users/${id}`);

  return response.data;
}

function useUser(id: number) {
  return useQuery<GetUserResponse, Error>({
    queryKey: [queryKey, id],
    queryFn: () => getUserById(id),
    initialData: () => {
      const initialUser = queryClient
        .getQueryData<GetUsersResponse>([queryKey])
        ?.find((user) => user.id === id);

      return initialUser;
    },
  });
}

interface UpdateUserResponse {
  id: number;
}

async function updateUserById(id: string, data: any): Promise<UpdateUserResponse> {
  const response = await instance.patch<UpdateUserResponse>(`/users/${id}`, data);

  return response.data;
}

function useUpdateUser() {
  return useMutation({
    mutationFn: (data: any) => updateUserById(data.id, data),
    onSuccess: (user) => {
      queryClient.invalidateQueries({
        queryKey: [queryKey, user.id],
      });
    },
  });
}

export { useCreateUser, useDeleteUser, useUpdateUser, useUser, useUsers };
