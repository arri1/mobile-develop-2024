import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../firebaseConfig'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export const registerUser = createAsyncThunk('auth/registerUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    return {
      uid: user.uid,
      email: user.email,
      accessToken: await user.getIdToken(),
      emailVerified: user.emailVerified
    }
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    return {
      uid: user.uid,
      email: user.email,
      accessToken: await user.getIdToken(),
      emailVerified: user.emailVerified
    }
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await signOut(auth)
})

export const observeAuthState = createAsyncThunk('auth/observeAuthState', async (_, { dispatch }) => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          accessToken: await user.getIdToken(),
          emailVerified: user.emailVerified
        }))
      } else {
        dispatch(setUser(null))
      }
      resolve()
    })
  })
})

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, loading: false, error: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
      })
  }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
