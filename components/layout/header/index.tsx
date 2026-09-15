"use client";

import { useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const Header: React.FC = () => {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">NextTodo</Link>
      </h1>

      <div className={styles.userSection}>
        {!loading && (
          <>
            {user ? (
              <>
                <span className={styles.userEmail}>{user.email}</span>
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={handleLogout}
                >
                  ログアウト
                </button>
              </>
            ) : (
              <Link href="/login" className="btn btn-outline-light btn-sm">
                ログイン
              </Link>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;