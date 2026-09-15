"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);
    setLoading(true);

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          setErrorMessage(error.message);
          return;
        }

        // Email confirmation が有効な場合は session が null になる
        if (data.user && !data.session) {
          setInfoMessage(
            "確認メールを送信しました。メール内のリンクをクリックして登録を完了してください。"
          );
        } else {
          router.push("/");
          router.refresh();
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setErrorMessage(error.message);
          return;
        }

        router.push("/");
        router.refresh();
      }
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "エラーが発生しました。"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-md-6 col-lg-5">
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h2 className="card-title text-center mb-4">
              {isSignUp ? "アカウント作成" : "ログイン"}
            </h2>

            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}

            {infoMessage && (
              <div className="alert alert-info" role="alert">
                {infoMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  メールアドレス
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                  autoComplete="email"
                />
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="password">
                  パスワード
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="6文字以上のパスワード"
                  autoComplete={isSignUp ? "new-password" : "current-password"}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mb-3"
                disabled={loading}
              >
                {loading
                  ? "処理中..."
                  : isSignUp
                  ? "アカウントを作成する"
                  : "ログインする"}
              </button>
            </form>

            <div className="text-center mt-3 border-top pt-3">
              {isSignUp ? (
                <p className="mb-0 text-muted">
                  すでにアカウントをお持ちですか？{" "}
                  <button
                    type="button"
                    className="btn btn-link p-0 align-baseline"
                    onClick={() => {
                      setIsSignUp(false);
                      setErrorMessage(null);
                      setInfoMessage(null);
                    }}
                  >
                    ログインへ
                  </button>
                </p>
              ) : (
                <p className="mb-0 text-muted">
                  アカウントをお持ちでないですか？{" "}
                  <button
                    type="button"
                    className="btn btn-link p-0 align-baseline"
                    onClick={() => {
                      setIsSignUp(true);
                      setErrorMessage(null);
                      setInfoMessage(null);
                    }}
                  >
                    新規登録へ
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

