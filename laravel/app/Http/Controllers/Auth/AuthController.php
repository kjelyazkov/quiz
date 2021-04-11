<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Extract to Request later
        $validData = $request->validate([
            'username'  => 'required|string|max:255|unique:users',
            'email'     => 'required|string|email|unique:users',
            'password'  => 'required|string|min:6|confirmed'
        ]);

        $user = User::create([
            'username'  => $validData['username'],
            'email'     => $validData['email'],
            'password'  => Hash::make($validData['password'])
        ]);

        return response()->json([
            'token' => $user->createToken('API Token')->plainTextToken
        ]);
    }

    public function login(Request $request)
    {
        // Extract to Request later
        $validData = $request->validate([
            'username'  => 'required|string',
            'password'  => 'required|string|min:6'
        ]);

        if(!Auth::attempt($validData)) {
            return response()->json([
                'Credetials not match'
            ], 401);
        }

        return response()->json([
            'token' => auth()->user()->createToken('API Token')->plainTextToken
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'successful logout!'
        ];
    }

    public function profile()
    {
        return response()->json(auth()->user());
    }
}
